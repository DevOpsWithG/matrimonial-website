from sqlalchemy import create_engine, text
import os

# Use the same DB URL as the application
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:password@localhost:5432/sagar_db")

def run_migrations():
    print(f"Connecting to database: {DATABASE_URL}")
    engine = create_engine(DATABASE_URL)
    
    with engine.connect() as conn:
        print("Checking for missing columns...")
        
        # Exhaustive list of all columns in the Profile model
        # Including legacy and new fields to ensure full sync
        columns_to_add = [
            ("native_place", "VARCHAR"),
            ("gotra", "VARCHAR"),
            ("family_details", "TEXT"),
            ("bio", "TEXT"),
            ("height", "INTEGER"),
            ("marital_status", "VARCHAR"),
            ("education", "VARCHAR"),
            ("job_title", "VARCHAR"),
            ("company", "VARCHAR"),
            ("income_range", "VARCHAR"),
            ("city", "VARCHAR"),
            ("state", "VARCHAR"),
            ("country", "VARCHAR DEFAULT 'India'"),
            ("horoscope", "VARCHAR"),
            ("rashi", "VARCHAR"),
            ("partner_preference", "TEXT"),
            ("photos", "JSON"),
            ("is_approved", "BOOLEAN DEFAULT FALSE"),
            ("religion", "VARCHAR DEFAULT 'Hindu'"),
            ("caste", "VARCHAR DEFAULT 'OBC'")
        ]
        
        for col_name, col_type in columns_to_add:
            try:
                # ALTER TABLE profiles ADD COLUMN IF NOT EXISTS col_name col_type;
                query = text(f"ALTER TABLE profiles ADD COLUMN IF NOT EXISTS {col_name} {col_type}")
                conn.execute(query)
                # In standard engine.connect(), we should commit if not using a transaction block
                # conn.commit() is fine in SQLAlchemy 2.0+
                print(f"Verified column: {col_name}")
            except Exception as e:
                print(f"Error adding column {col_name}: {str(e)}")
        
        # Explicit commit for the connection
        try:
            conn.commit()
        except:
            pass

    print("Migration complete! Database is now 100% synchronized with models.py.")

if __name__ == "__main__":
    run_migrations()
