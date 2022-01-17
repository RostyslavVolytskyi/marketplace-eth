import { CourseHero, Curriculum, Keypoints } from "@components/course";
import { Modal } from "@components/common";
import { BaseLayout } from "@components/layout";

export default function Course() {
    return (
        <>
            <div className="py-4">
                <CourseHero />
                <Keypoints />
                <Curriculum />
                <Modal />
            </div>
        </>
    );
}

Course.Layout = BaseLayout;
