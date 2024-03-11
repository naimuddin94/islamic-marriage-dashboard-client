export const permissions = [
  {
    name: 'Role Management',
    permissionsGroup: ['Add Role', 'Update Role', 'Delete Role'],
  },
  {
    name: 'Biodata',
    permissionsGroup: ['Add Biodata', 'Update Biodata', 'Delete Biodata'],
  },
  {
    name: 'Packages',
    permissionsGroup: ['Add Package', 'Update Package', 'Delete Package'],
  },
  {
    name: 'Subscriptions',
    permissionsGroup: [
      'Add Subscription',
      'Update Subscription',
      'Delete Subscription',
    ],
  },
  {
    name: 'Restaurants',
    permissionsGroup: [
      'Add Restaurant',
      'Update Restaurant',
      'Delete Restaurant',
    ],
  },
  {
    name: 'Kazi Office',
    permissionsGroup: ['Add Office', 'Update Office', 'Delete Office'],
  },
];

export const convertToSlug = (text: string, replaceWith="-") => {
  return text.toLowerCase().replace(/\s+/g, replaceWith);
};
