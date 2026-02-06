from sqlalchemy import create_engine, text
import os

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:password@localhost:5432/sagar_db")

def run_migrations():
    print(f"Connecting to database: {DATABASE_URL}")
    engine = create_engine(DATABASE_URL)
    
    with engine.connect() as conn:
        print("Checking for missing columns...")
        
        # List of columns to add
        # Format: (column_name, column_type)
        columns_to_add = [
            ("native_place", "VARCHAR"),
            ("gotra", "VARCHAR"),
            ("rashi", "VARCHAR"),
            ("family_details", "TEXT"), # Just in case
            ("horoscope", "VARCHAR")     # Just in case
        ]
        
        for col_name, col_type in columns_to_add:
            try:
                # PostgreSQL specific syntax for adding column if it doesn't exist
                # ALTER TABLE profiles ADD COLUMN IF NOT EXISTS col_name col_type;
                query = text(f"ALTER TABLE profiles ADD COLUMN IF NOT EXISTS {col_name} {col_type}")
                conn.execute(query)
                conn.commit()
                print(f"Successfully added/verified column: {col_name}")
            except Exception as e:
                print(f"Error adding column {col_name}: {str(e)}")
                conn.rollback()

    print("Migration complete!")

if __name__ == "__main__":
    run_migrations()
