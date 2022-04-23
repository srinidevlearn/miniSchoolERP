import { FormGroup } from '@angular/forms';
import { RouterString } from './enums/routerStringDeclaration.enum';
import { IToolBarMenu } from './interfaces/toolbarmenu.interface';

export const RootMenu: IToolBarMenu[] = [
  {
    label: 'Dashboard',
    icon: 'view_module',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `${RouterString.DASHBOARD}`,
  },
  {
    label: 'Students',
    icon: 'person',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `${RouterString.STUDENTS}`,
  },
  {
    label: 'Fees',
    icon: 'assessment',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `${RouterString.FEES}`,
  },
  {
    label: 'Parents',
    icon: 'wc',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `${RouterString.PARENTS}`,
  },
  {
    label: 'Siblings',
    icon: 'people',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `${RouterString.SIBILINGS}`,
  },
  {
    label: 'Bus Route',
    icon: 'directions_bus',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `${RouterString.BUSROUTE}`,
  },
  {
    label: 'Address',
    icon: 'import_contacts',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `${RouterString.ADDRESS}`,
  },
  {
    label: 'Settings',
    icon: 'settings',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `${RouterString.SETTINGS}`,
  },
  // {
  //   label: 'Logout',
  //   icon: 'logout',
  //   showOnMobile: false,
  //   showOnTablet: false,
  //   showOnDesktop: false,
  //   url: `/${RouterString.LOGOUT}`,
  // },
];
export const dateHelper = (timeStamp: number) =>
  new Date(timeStamp).toISOString().split('T')[0];

export const generateBloodGroup = () => {
  return [
    { label: 'A +ve', value: 'A +ve' },
    { label: 'A -ve', value: 'A -ve' },

    { label: 'B +ve', value: 'B +ve' },
    { label: 'B -ve', value: 'B -ve' },
    { label: 'AB +ve', value: 'AB +ve' },
    { label: 'AB -ve', value: 'AB -ve' },

    { label: 'O +ve', value: 'O +ve' },
    { label: 'O -ve', value: 'O -ve' },
  ];
};
export function groupBy(key: any, array: any) {
  return array.reduce((all: any, current: any) => {
    const existingKey = all.find(
      (existing: any) => existing.key === current[key]
    );
    if (!existingKey) {
      all.push({ key: current[key], values: [current] });
    } else {
      existingKey.values.push(current);
    }
    return all;
  }, []);
}

export const generateStudentClass = (): any => {
  let studentClass: string[] = ['preKG', 'LKG', 'UKG'];
  return Array(15)
    .fill(0)
    .map((item, index) => {
      if (index <= 2) {
        return { label: studentClass[index], value: studentClass[index] };
      }
      return { label: `class ${index - 2}`, value: index - 2 };
    });
};
export const MY_DATE_TIME_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

  
export const defaultColDefinition = {
  flex: 1,
  sortable: true,
  // filter: true,
  lockVisible: true,
  wrapText: true,
  filter: 'agTextColumnFilter',
  // enable floating filters by default
  floatingFilter: true,
  // make columns resizable
  resizable: true,
};

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (
      matchingControl.errors &&
      !matchingControl.errors['confirmedValidator']
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function modifyToLowerCaseKeys(d: { [key: string]: any }): { [key: string]: any } {
  return Object.fromEntries(
    Object.entries(d).map(([key, value]) => {
      return [key.toLowerCase(), value];
    })
  );
}
export function stringifyNullValues(d: { [key: string]: any }): { [key: string]: any } {
  return Object.fromEntries(
    Object.entries(d).map(([key, value]) => {
      return [key, value+''];
    })
  );
}
export function nullifyStringNullValues(d: { [key: string]: any }): { [key: string]: any } {
  return Object.fromEntries(
    Object.entries(d).map(([key, value]) => {
      return [key, value !== 'null' ? value : null];
    })
  );
}