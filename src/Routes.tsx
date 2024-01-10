import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DesignCollection } from './components/DesignCollection';
import { ExploreCollections } from './components/ExploreCollections';
import { PlayableTable } from './components/PlayableTable';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>index</div>
    },
    {
        path: '/design/:collectionId',
        element: <DesignCollection />
    },
    {
        path: '/design',
        element: <ExploreCollections />
    },
    {
        path: '/build',
        element: <ExploreCollections />
    },
    {
        path: '/play',
        element: <PlayableTable />
    }
    // {
        
    //     path: '/callback/login',
    //     element: <div></div>
    // },
    // {
        
    //     path: '/callback/logout',
    //     loader: () => redirect('/')
    // }
]);

export const Routes = () => (
    //<AuthProvider {...oidcConfig}>
      <RouterProvider router={router} />
    //</AuthProvider>
  );