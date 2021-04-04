export enum Role {
  Manager,
  Employee,
  CLevel,
}
export class Employee {
  Role: Role

  public isRoleHigherThan(role: Role): boolean {
    return true
  }
}
