import React from 'react';
import Redirect from 'umi/redirect';
import RenderAuthorized from '@/components/Authorized';
import { getAuthority } from '@/utils/authority';

const Authority = getAuthority();
const Authorized = RenderAuthorized(Authority);

export default ({ children }) => (
  <Authorized authority={children.props.route.authority} noMatch={<Redirect to="/user/login" />}>
    {children}
  </Authorized>
);
