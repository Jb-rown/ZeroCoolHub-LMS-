import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <section className="py-10 px-6">
      <h1 className="text-4xl font-bold mb-6">My Profile</h1>

      <div className="space-y-4 text-lg">
        <p><strong>Name:</strong> John Brown</p>
        <p><strong>Email:</strong> johnbrown@zerocoolhub.com</p>
        <p><strong>Enrolled Classes:</strong> 4</p>

        <Button>Edit Profile</Button>
      </div>
    </section>
  );
}
