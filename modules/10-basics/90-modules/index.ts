/* eslint-disable @typescript-eslint/no-namespace */
// BEGIN
namespace Company {
  export function isEmployeeEmail(email: string, domain: string) {
    return email.includes(domain);
  }
}
// END

type User = {
  email: string
};

function authorize(user: User | null) {
  const companyDomain = 'hexlet.io';

  const email = user?.email ?? '';

  return Company.isEmployeeEmail(email, companyDomain);
}

export default authorize;
