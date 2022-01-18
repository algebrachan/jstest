// lib/datetime.ts  — ConardLi

export function currentDatetime(): DateTimeString {
  return new Date().toISOString();
}