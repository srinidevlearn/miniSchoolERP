
export  class StudentDetailsHelper{
    static uiToApiConfigKeys(studentInfo:{[key:string]:any}){
      return {
          ... studentInfo?.admissionNo && {ADMN_NO : studentInfo.admissionNo},
          ... studentInfo?.admissionDate && {ADMIN_DATE : studentInfo.admissionDate},
          ... studentInfo?.studentFirstName && {STUD_FIRST_NAME : studentInfo.studentFirstName},
          ... studentInfo?.studentLastName && {STUD_LAST_NAME : studentInfo.studentLastName},
          ... studentInfo?.studentClass && {STUD_CLASS : studentInfo.studentClass},
          ... studentInfo?.studentFatherName && {STUD_FATH_NAME : studentInfo.studentFatherName},
          ... studentInfo?.studentMotherName && {STUD_MTHR_NAME : studentInfo.studentMotherName},
          ... studentInfo?.studentGender && {STUD_GNDR : studentInfo.studentGender},
          ... studentInfo?.studentDOB && {STUD_DOB : studentInfo.studentDOB},
          ... studentInfo?.studentCaste && {STUD_CASTE : studentInfo.studentCaste},
          ... studentInfo?.studentSubCaste && {STUD_SUB_CASTE : studentInfo.studentSubCaste},
          ... studentInfo?.studentCommunity && {STUD_CMTY : studentInfo.studentCommunity},
          ... studentInfo?.studentReligion && {STUD_RLIG : studentInfo.studentReligion},
          ... studentInfo?.studentNationality && {STUD_NTLY : studentInfo.studentNationality},
          ... studentInfo?.studentMotherToungue && {STUD_MTHR_TNGE : studentInfo.studentMotherToungue},
          ... studentInfo?.studentLangaugeKnown && {STUD_LNG_KNWN : studentInfo.studentLangaugeKnown},
          ... studentInfo?.studentBloodGroup && {STUD_BLD_GRUP : studentInfo.studentBloodGroup},
          ... studentInfo?.studentAadharNumber && {STUD_AHAR_NO : studentInfo.studentAadharNumber},
          ... studentInfo?.studentPreviousSchool && {STUD_PREV_SCHL : studentInfo.studentPreviousSchool},
          ... studentInfo?.studentDiscount && {STUD_DISCOUNT : studentInfo.studentDiscount},
          ... studentInfo?.studentEMINo && {STUD_EMIS_NO : studentInfo.studentEMINo},
      }
    }
    static apiToUIConfig(studentInfo:{[key:string]:any}){
      return {
          ... studentInfo?.ADMN_NO  && {admissionNo : studentInfo.ADMN_NO},
          ... studentInfo?.ADMIN_DATE && {admissionDate : studentInfo.ADMIN_DATE},
          ... studentInfo?.STUD_FIRST_NAME && {studentFirstName : studentInfo.STUD_FIRST_NAME},
          ... studentInfo?.STUD_LAST_NAME && {studentLastName : studentInfo.STUD_LAST_NAME},
          ... studentInfo?.STUD_CLASS && {studentClass : studentInfo.STUD_CLASS},
          ... studentInfo?.STUD_FATH_NAME && {studentFatherName : studentInfo.STUD_FATH_NAME},
          ... studentInfo?.STUD_MTHR_NAME && {studentMotherName : studentInfo.STUD_MTHR_NAME},
          ... studentInfo?.STUD_GNDR && {studentGender : studentInfo.STUD_GNDR},
          ... studentInfo?.STUD_DOB && {studentDOB : studentInfo.STUD_DOB},
          ... studentInfo?.STUD_CASTE && {studentCaste : studentInfo.STUD_CASTE},
          ... studentInfo?.STUD_SUB_CASTE && {studentSubCaste : studentInfo.STUD_SUB_CASTE},
          ... studentInfo?.STUD_CMTY && {studentCommunity : studentInfo.STUD_CMTY},
          ... studentInfo?.STUD_RLIG && {studentReligion : studentInfo.STUD_RLIG},
          ... studentInfo?.STUD_NTLY && {studentNationality : studentInfo.STUD_NTLY},
          ... studentInfo?.STUD_MTHR_TNGE && {studentMotherToungue : studentInfo.STUD_MTHR_TNGE},
          ... studentInfo?.STUD_LNG_KNWN && {studentLangaugeKnown : studentInfo.STUD_LNG_KNWN},
          ... studentInfo?.STUD_BLD_GRUP && {studentBloodGroup : studentInfo.STUD_BLD_GRUP},
          ... studentInfo?.STUD_AHAR_NO && {studentAadharNumber : studentInfo.STUD_AHAR_NO},
          ... studentInfo?.STUD_PREV_SCHL && {studentPreviousSchool : studentInfo.STUD_PREV_SCHL},
          ... studentInfo?.STUD_DISCOUNT && {studentDiscount : studentInfo.STUD_DISCOUNT},
          ... studentInfo?.STUD_EMIS_NO && {studentEMINo : studentInfo.STUD_EMIS_NO},
          
      }
    }
  }