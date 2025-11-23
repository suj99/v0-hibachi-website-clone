-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- Create the contact_messages table
create table if not exists contact_messages (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text not null,
  event_date date,
  guests integer,
  location text not null,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table contact_messages enable row level security;

-- Create a policy that allows anyone to insert messages (public submission)
create policy "Allow public to insert contact messages"
on contact_messages for insert
to public
with check (true);

-- Create a policy that allows only authenticated users (admins) to view messages
create policy "Allow admins to view contact messages"
on contact_messages for select
to authenticated
using (true);
