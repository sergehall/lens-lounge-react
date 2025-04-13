import React, { useState, useRef, useEffect } from "react";
import { Icons } from "../../../utils/icons";
import {
    HeaderWrapper,
    Meta,
    EllipsisButton,
    Dropdown,
    MenuItem,
    BlogName,
    DotSeparator,
    TimeAgo
} from "./postHeader.styles";
import {RouteManager} from "../../../utils/routeManager";

interface PostHeaderProps {
    blogName: string;
    createdAt: string;
}

const timeAgo = (date: string): string => {
    const postDate = new Date(date);
    const now = new Date();
    const diff = Math.floor((now.getTime() - postDate.getTime()) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
};

const PostHeader: React.FC<PostHeaderProps> = ({ blogName, createdAt }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);
    };

    const path = `/${RouteManager.getNestedPaths().blog}/${blogName}`;

    // Optional: Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuVisible(false);
            }
        };

        if (menuVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuVisible]);

    return (
        <HeaderWrapper>
            <Meta>
                <BlogName to={path}>@{blogName}</BlogName>
                <DotSeparator>•</DotSeparator>
                <TimeAgo>{timeAgo(createdAt)}</TimeAgo>
            </Meta>

            <EllipsisButton onClick={toggleMenu}>
                <Icons.EllipsisExtraBold size={23} />

            </EllipsisButton>
            {menuVisible && (
                <Dropdown ref={menuRef}>
                    <MenuItem red>Report</MenuItem>
                    <MenuItem red>Unfollow</MenuItem>
                    <MenuItem>Add to favorites</MenuItem>
                    <MenuItem>Go to post</MenuItem>
                    <MenuItem>Share to…</MenuItem>
                    <MenuItem>Copy link</MenuItem>
                    <MenuItem>Embed</MenuItem>
                    <MenuItem>About this account</MenuItem>
                    <MenuItem>Cancel</MenuItem>
                </Dropdown>
            )}
        </HeaderWrapper>
    );
};

export default PostHeader;
