const mapping: Record<string, string> = {
  dentalclinics: 'dentalclinic',
  patients: 'patient',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
