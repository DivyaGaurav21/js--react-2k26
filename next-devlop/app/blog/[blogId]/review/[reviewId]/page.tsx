export default async function reviewPage({
    params
} : {
    params : Promise<{
        blogId : string,
        reviewId : string
    }>
}
){

    const productReviewId = (await params).reviewId;
    const blogId = (await params).blogId;

    return (
        <div>
            <h1>blog { blogId} review is {productReviewId}</h1>
        </div>
    )
}