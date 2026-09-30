-- Minha Rotina V40: armazenamento privado de fotos das refeições
-- Execute no SQL Editor do Supabase uma única vez.
insert into storage.buckets (id, name, public)
values ('meal-photos', 'meal-photos', false)
on conflict (id) do update set public = false;

create policy "meal photos select own"
on storage.objects for select
to authenticated
using (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "meal photos insert own"
on storage.objects for insert
to authenticated
with check (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "meal photos update own"
on storage.objects for update
to authenticated
using (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text)
with check (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "meal photos delete own"
on storage.objects for delete
to authenticated
using (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);
