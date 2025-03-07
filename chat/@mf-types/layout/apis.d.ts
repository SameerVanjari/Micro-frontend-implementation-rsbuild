
    export type RemoteKeys = 'layout/Navbar';
    type PackageType<T> = T extends 'layout/Navbar' ? typeof import('layout/Navbar') :any;