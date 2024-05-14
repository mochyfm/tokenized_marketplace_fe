import { writable } from 'svelte/store';
import { User } from './User';

export const isAuthenticated = writable(new User("", "", ""));

