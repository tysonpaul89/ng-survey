export interface IPage {
  id: string;
  order: number;
  title: string;
  elements: IElement[];
}

export interface IElement {
  id: string;
  order: number;
  type: string;
  question: string;
  options?: IOption[];
  meta?: object;
}

export interface IOption {
  id: string;
  order: number;
  type: string;
  checked?: boolean;
  value: string | number;
  rating_max?: number;
}


export const questions = [
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
            type: 'checkbox',
            checked: false,
            value: 'Cat'
          },
          {
            id: 'opt-1546109515886',
            order: 2,
            type: 'checkbox',
            checked: true,
            value: 'Dog'
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
            type: 'radio',
            order: 1,
            value: 'Male'
          },
          {
            id: 'opt-1546110437050',
            type: 'radio',
            order: 2,
            value: 'Female',
          },
          {
            id: 'opt-1546110437050',
            type: 'radio',
            order: 3,
            value: 'OthersO'
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
            id: 'opt-1546110842900',
            type: 'dropdown',
            checked: false,
            order: 1,
            value: 'Choose..'
          },
          {
            id: 'opt-1546110842898',
            type: 'dropdown',
            checked: false,
            order: 1,
            value: 'India'
          },
          {
            id: 'opt-1546111105001',
            type: 'dropdown',
            checked: false,
            order: 2,
            value: 'US'
          },
          {
            id: 'opt-1546111176435',
            type: 'dropdown',
            checked: false,
            order: 3,
            value: 'Canada'
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
        options: [{
          id: 'opt-1546111176435',
          type: 'rating',
          order: 1,
          value: 3,
          rating_max: 5
        }]
      },
    ]
  }
];
