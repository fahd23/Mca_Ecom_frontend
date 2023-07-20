import { lazy } from "react";
export const Home = lazy(() => import("../Pages/Home"));
export const ErrorPage = lazy(() => import("../Pages/ErrorPage"));
export const Cart = lazy(() => import("../Pages/Cart"));
export const Category = lazy(() => import("../Pages/Category"));
export const Product = lazy(() => import("../Pages/Product"));
export const SuccessPayment = lazy(() => import("../Pages/SuccessPayment"));
export const FailedPayment = lazy(() => import("../Pages/FailedPayment"));
