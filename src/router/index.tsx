import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useRecoilValue } from "recoil";
import { appstate } from "../Atoms/AppState";
import { NonHomePages, Home, NotFound } from "../pages";
import { pagesdata } from "../Atoms/selectors";
import { AnimatePresence } from "framer-motion";
import UploadPage from "../pages/UploadPage";

const AppRoutes = () => {
  const pages = useRecoilValue(pagesdata);

  const location = useLocation();

  if (!pages?.length) {
    return <Loading />;
  }
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {pages
            ?.filter((f: any) => f.published)
            ?.map((page: any) => {
              const { _id, body, published, slug, title, bannerImage } = page;

              return (
                <Route
                  path={`/${slug?.current}`}
                  element={
                    <NonHomePages
                      {...page}
                      _id={_id}
                      title={title}
                      body={body}
                      published={published}
                      slug={`/${slug?.current}`}
                      bannerImage={bannerImage}
                    />
                  }
                />
              );
            })}
            <Route path="upload-files" element={<UploadPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AppRoutes;
