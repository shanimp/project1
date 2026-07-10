async function getSequentialData() {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/4"
    );
    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await postsResponse.json();
    console.log(`user: ${user.name}, posts count: ${posts.length}`);
  } catch (error) {
    console.error("Error in sequence: ", error);
  }
}
getSequentialData()