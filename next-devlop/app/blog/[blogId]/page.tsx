export default async function singleBlog({
    params
}: {
    params: Promise<{ blogId: string }>
}
) {

    const blogId = (await params).blogId;
    return (
        <div>
            <h1>single blog {blogId} </h1>
        </div>
    )
}