import usersReducer, {getUsers, isFetching, UsersPageType} from "./usersReducer";

let initialState: UsersPageType

beforeEach(() => {
  initialState = {
    users: [
      {
        id: 1,
        name: 'Alex',
        uniqueUrlName: null,
        photos: {small: null, large: null,},
        status: null,
        followed: false,
      },
      {
        id: 2,
        name: 'Olga',
        uniqueUrlName: null,
        photos: {small: null, large: null,},
        status: null,
        followed: false,
      },
      {
        id: 3,
        name: 'Sophia',
        uniqueUrlName: null,
        photos: {small: null, large: null,},
        status: null,
        followed: false,
      },
      {
        id: 4,
        name: 'Vovchik',
        uniqueUrlName: null,
        photos: {small: null, large: null},
        status: null,
        followed: false,
      },
    ],
    totalCount: 0,
    currentPage: 1,
    numberPages: 0,
    startLoader: false,
  }
})

test('isFetching users', () => {
  const action1 = isFetching()
  const newState1 = usersReducer(initialState, action1)

  expect(newState1.startLoader).toBe(true)

  const action2 = getUsers([{
    id: 5,
    name: 'Max',
    uniqueUrlName: null,
    photos: {small: null, large: null,},
    status: null,
    followed: false,
  },{
    id: 6,
    name: 'fake',
    uniqueUrlName: null,
    photos: {small: null, large: null,},
    status: null,
    followed: false,
  }])
  const newState2 = usersReducer(newState1, action2)

  expect(newState2.startLoader).toBe(false)
})