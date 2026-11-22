create table if not exists files (
  path text primary key,
  content text not null,
  updated_at timestamptz not null default now()
);

create table if not exists file_versions (
  id bigint generated always as identity primary key,
  path text not null,
  content text not null,
  saved_at timestamptz not null default now()
);
