// Type definitions for Materialize
// Project: http://materializecss.com/
// Definitions by: Kristof Torfs <https://github.com/kristoftorfs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

// collapsible.js

interface CollapsibleOptions {
    accordion: boolean;
}

interface JQuery {
    collapsible(options?: CollapsibleOptions): JQuery;
}

// sideNav.js

interface SideNavOptions {
    menuWidth?: number;
    edge?: string;
    closeOnClick?: boolean;
}

interface JQuery {
    sideNav(options?: SideNavOptions): JQuery;
    sideNav(command: string): JQuery;
}

declare module "materialize" {
}