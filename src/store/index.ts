import { store, persistor } from './store.redux';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Now, you can dispatch a action at any where
export const GlobalDispatch = store.dispatch;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
