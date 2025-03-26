
    export type RemoteKeys = 'chat/Chat';
    type PackageType<T> = T extends 'chat/Chat' ? typeof import('chat/Chat') :any;