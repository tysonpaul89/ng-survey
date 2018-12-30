export interface IPage {
  id: string;
  order: number;
  title: string;
  elements: Object[];
}

export interface IElement {
  id: string;
  order: number;
  type: string;
}


const questions = {
  pages: [
    {
      id: 'page-1546108822770',
      order: 1,
      title: 'Page 1',
      elements: [
        { // Single Input
          id: 'si-1546109389408',
          order: 1,
          type: 'singleInput',
          question: 'What\'s your name?',
        },
        { // Checkbox
          id: 'check-1546109389408',
          order: 2,
          type: 'checkbox',
          question: 'What kind of pet are you having?',
          options: [
            {
              id: 'opt-1546109512655',
              order: 1,
              name: 'Cat',
              value: 'cat'
            },
            {
              id: 'opt-1546109515886',
              order: 2,
              name: 'Dog',
              value: 'dog'
            },
          ]
        },
        { // Multiple Choice
          id: 'mc-1546110435065',
          order: 3,
          type: 'multipleChoice',
          question: 'What\'s your gender?',
          options: [
            {
              id: 'opt-1546110436048',
              order: 1,
              name: 'Male',
              value: 'M'
            },
            {
              id: 'opt-1546110437050',
              order: 2,
              name: 'Female',
              value: 'F'
            },
            {
              id: 'opt-1546110437050',
              order: 3,
              name: 'Others',
              value: 'O'
            },
          ]
        },
        { // Dropdown
          id: 'dd-1546110777646',
          order: 4,
          type: 'dropdown',
          question: 'Which country are you from?',
          options: [
            {
              id: 'opt-1546110842898',
              order: 1,
              name: 'India',
              value: 'IND'
            },
            {
              id: 'opt-1546111105001',
              order: 2,
              name: 'US',
              value: 'US'
            },
            {
              id: 'opt-1546111176435',
              order: 3,
              name: 'Canada',
              value: 'CAD'
            }
          ]
        },
        { // Comment
          id: 'cmt-1546111320926',
          order: 5,
          type: 'comment',
          question: 'What\'s your opinion about global warming ?'
        },
        { // Rating
          id: 'rt-1546111451579',
          order: 6,
          type: 'rating',
          question: 'How would you rate your self-esteem?',
          max: 5
        },
      ]
    }
  ]
};
