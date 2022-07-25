import React from 'react'
import { Root, List, ListEntry } from './menu.styles';
import { routes } from './menu.data';
import { useRouter } from 'next/router'
import Link from 'next/link';

const Menu = () => {
    const pathname = useRouter()?.pathname;
    const menuEntries = routes.map((entry, index) =>
        <ListEntry key={index} active={pathname === entry.pathname}>
            <Link href={entry.pathname}>
                {entry.title}
            </Link>
        </ListEntry>)

    return (
        <Root>
            <List>
                {menuEntries}
            </List>
        </Root>
    )
}

export default Menu