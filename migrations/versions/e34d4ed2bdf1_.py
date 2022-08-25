"""empty message

Revision ID: e34d4ed2bdf1
Revises: 686171c6eac1
Create Date: 2022-08-23 20:36:30.440994

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e34d4ed2bdf1'
down_revision = '686171c6eac1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_admin', sa.Boolean(), nullable=True))
    op.drop_column('user', 'admin')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('admin', sa.BOOLEAN(), autoincrement=False, nullable=True))
    op.drop_column('user', 'is_admin')
    # ### end Alembic commands ###