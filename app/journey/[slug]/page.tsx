import { notFound } from "next/navigation";
import { getJourneyBySlug, getAllJourneySlugs } from "@/app/lib/journeyData";
import JourneyContent from "./JourneyContent";

export async function generateStaticParams() {
    const slugs = getAllJourneySlugs();
    return slugs.map((slug) => ({ slug }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function JourneyDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const journey = getJourneyBySlug(slug);

    if (!journey) {
        notFound();
    }

    return (
        <JourneyContent
            meta={{
                slug: journey.slug,
                year: journey.year,
                type: journey.type,
                image: journey.image,
            }}
        />
    );
}
