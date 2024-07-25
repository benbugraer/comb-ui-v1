'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

export default function MDXWrapper({ ...props }: MDXRemoteProps) {
    return <MDXRemote {...props} />;
}