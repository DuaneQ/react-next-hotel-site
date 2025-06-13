import UserDetailsClient from "./UserDetailsClient";

export async function generateStaticParams() {
  // Replace with real user IDs if you have them
  return [
    { id: "1ceefbdc-321b-4848-9e29-efbc8fe2f10a" },
    { id: "user.1ceefbdc-321b-4848-9e29-efbc8fe2f10a" },
    // Add all user IDs you want to statically generate
  ];
}

export default function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <UserDetailsClient userId={params.id} />;
}