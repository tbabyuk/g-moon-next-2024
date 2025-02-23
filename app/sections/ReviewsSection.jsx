import { SectionHeader } from "../components/SectionHeader"
import { clientReviewsArray } from "../data/clientReviews"
import { ReviewCard } from "./components/ReviewCard"
import Link from "next/link"


export const ReviewsSection = () => {

    return (
        <div className="px-5 py-24">
            <SectionHeader title="CUSTOMER REVIEWS" />
            <div className="flex justify-center flex-wrap gap-6">
                {clientReviewsArray && 
                    clientReviewsArray.map((review, index) => <ReviewCard key={index} review={review} />
                )}
            </div>
        </div>
    )
}