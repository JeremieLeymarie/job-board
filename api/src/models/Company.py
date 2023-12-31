from typing import List
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, func
from sqlalchemy.orm import relationship, mapped_column, Mapped

from connect import db


class Company(db.Model):
    """Company."""

    __tablename__ = "company"

    id = Column(Integer, primary_key=True, autoincrement="auto")
    name = Column(String(255), unique=True, nullable=False)
    users: Mapped[List["User"]] = relationship(back_populates="company")
    industry_id = mapped_column(ForeignKey("industry.id"))
    industry: Mapped['Industry'] = relationship(back_populates="companies")
    advertisements: Mapped[List["Advertisement"]
                           ] = relationship(back_populates="company")
    description = Column(String(255))
    avatar = Column(String(2000))
    banner = Column(String(1000))
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now())

    def __repr__(self):
        return f"<Company {self.name}>"
