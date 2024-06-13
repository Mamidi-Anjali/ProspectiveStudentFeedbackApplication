export type SurveyInput = {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    telephoneNumber: string;
    email: string;
    dateOfSurvey: string;
    likeMost: {
      students: boolean;
      location: boolean;
      campus: boolean;
      atmosphere: boolean;
      dormRooms: boolean;
      sports: boolean;
    };
    interestOrigin: string;
    recommendationLikelihood: string;
    additionalComments: string;
  }
  
  export type SurveyOutput = {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    telephoneNumber: string;
    email: string;
    dateOfSurvey: string;
    likeStudents: boolean;
    likeLocation: boolean;
    likeCampus: boolean;
    likeAtmosphere: boolean;
    likeDormRooms: boolean;
    likeSports: boolean;
    interestOrigin: string;
    recommendationLikelihood: string;
    additionalComments: string;
  }