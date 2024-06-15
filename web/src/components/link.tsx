import * as Headless from "@headlessui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const Link = React.forwardRef(function Link(
  props: { href: string } & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <NavLink to={props.href} {...props} ref={ref} />
    </Headless.DataInteractive>
  );
});
