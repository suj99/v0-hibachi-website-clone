CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (subscribe)
CREATE POLICY "Allow public insert" ON subscribers FOR INSERT WITH CHECK (true);

-- Only allow authenticated users (admins) to view subscribers
-- Assuming admins are authenticated users for now, or you can restrict further
CREATE POLICY "Allow authenticated select" ON subscribers FOR SELECT USING (auth.role() = 'authenticated');
