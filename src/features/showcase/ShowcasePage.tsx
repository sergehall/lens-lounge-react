import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "./profile/Profile";
import {
    BlogsSection,
    ProfileSection,
    ShowcaseContainer,
    PlaceholderProfileContainer,
    ActionButtonsWrapper,
    ActionButton,
    Divider,
    DividerText,
} from "./showcasePage.styles";
import { RootState, AppDispatch } from "../../app/store";
import { ProfileState, loadProfile } from "./profile/profileSlice";
import { getUserBlogsByCategory } from "./my-blogs/mocks/getUserBlogsByCategory";
import { Category } from "../categories/types/category.types";
import { slugify } from "../../utils/slugify";
import { RouteManager } from "../../utils/routeManager";
import {mockCategories} from "../categories/mock/mockCategories";
import MyCategories from "./categories/MyCategories";
import placeholderImageDefault from "../../assets/images/placeholderImageDefault.png";


const ShowcasePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const profile = useSelector((state: RootState) => state.showcasePage.profile) as ProfileState;

    const isRegistered = Boolean(profile.firstName && profile.lastName && profile.photoUrl);

    useEffect(() => {
        dispatch(loadProfile());
    }, [dispatch]);

    const userBlogsByCategory = useMemo(() => getUserBlogsByCategory(profile.username), [profile.username]);

    const categories: Category[] = useMemo(() => {
        return Object.keys(userBlogsByCategory).map((categoryName) => {
            const found = mockCategories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
            return {
                name: found?.name || categoryName,
                imageUrl: found?.imageUrl || placeholderImageDefault,
                featured: false,
            };
        });
    }, [userBlogsByCategory]);


    const handleCategoryClick = (category: Category) => {
        const slug = slugify(category.name);
        navigate(RouteManager.getCategoryPathBySlug(slug));
    };

    const handleSignInClick = () => {
        console.log("Navigating to Sign In...");
    };

    const handleCreateAccountClick = () => {
        console.log("Navigating to Create Account...");
    };

    return (
        <ShowcaseContainer>
            <ProfileSection>
                {isRegistered ? (
                    <Profile />
                ) : (
                    <PlaceholderProfileContainer>
                        <h2>No Profile Found</h2>
                        <p>Please register or sign in to complete your profile and join the community!</p>
                        <Divider />
                        <ActionButtonsWrapper>
                            <ActionButton onClick={handleSignInClick}>SIGN IN</ActionButton>
                            <DividerText><span>or</span></DividerText>
                            <ActionButton onClick={handleCreateAccountClick}>CREATE ACCOUNT</ActionButton>
                        </ActionButtonsWrapper>
                    </PlaceholderProfileContainer>
                )}
            </ProfileSection>
            <BlogsSection>
                    <MyCategories categories={categories} onCategoryClick={handleCategoryClick} />
            </BlogsSection>
        </ShowcaseContainer>
    );
};

export default ShowcasePage;
