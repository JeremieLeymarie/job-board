from typing import List
from sqlalchemy import Column, DateTime, String, func
from sqlalchemy.orm import mapped_column, Mapped, relationship

from models.User import user_skills
from models.Advertisement import advertisement_skills

from connect import db


class Skill(db.Model):
    """Skill."""

    __tablename__ = "skill"

    id: Mapped[int] = mapped_column(primary_key=True)
    name = Column(String(255))
    users: Mapped[List["User"]] = relationship(
        secondary=user_skills, back_populates="skills")
    advertisements: Mapped[List["Advertisement"]] = relationship(
        secondary=advertisement_skills, back_populates="skills")
    color = Column(String(255))
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now())

    def __repr__(self):
        return f"<Skill {self.name}>"
