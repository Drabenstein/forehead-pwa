import {
  Await,
  useLoaderData,
} from "react-router-dom";
import { Category } from "../models/category";
import React from "react";
import CategoriesView from "./components/CategoriesView";
import ErrorPage from "../shared/ErrorPage";
import GlobalSpinnerFallback from "../shared/GlobalSpinnerFallback";

type CategoriesLoaderData = {
  categories: Promise<Category[]>;
};

const Categories = () => {
  const data = useLoaderData() as CategoriesLoaderData;

  return (
    <>
      <React.Suspense fallback={<GlobalSpinnerFallback />}>
        <Await resolve={data.categories} errorElement={<ErrorPage />}>
          <CategoriesView />
        </Await>
      </React.Suspense>
    </>
  );
};

export default Categories;
