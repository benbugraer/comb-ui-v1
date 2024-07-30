'use client';

import {MDXRemote, MDXRemoteProps} from 'next-mdx-remote';
import DockPreview from "../app/recipes/components/DockPreview";

export default function MDXWrapper({...props}: MDXRemoteProps) {


    const components = {
        DockPreview,
    };


    return <MDXRemote {...props} components={components}/>;
}