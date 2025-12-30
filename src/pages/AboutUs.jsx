export default function AboutUs() {
    return (
        <div className=" bg-[#EEF5FF] px-6 py-16">
            {/* Header */}
            <div className="mb-12 text-center">
                <h2 className="mb-3 text-3xl font-bold text-gray-700 text-center">
                    About Us
                </h2>
                <p className="text-sm text-gray-500">
                    Handmade with love, stitched with care.
                </p>
            </div>

            {/* Content */}
            <div className="space-y-6 max-w-5xl mx-auto text-center text-gray-700 leading-relaxed md:text-left">
                <p>
                    We are a small handmade crochet brand inspired by softness, comfort,
                    and the joy of cute details. Every piece we create is thoughtfully
                    crafted by hand, stitch by stitch, with love and care.
                </p>

                <p>
                    Our designs are influenced by pastel tones, cozy textures, and playful
                    ideas — from cotton-candy colors to adorable bunny-inspired styles.
                    Each product is made to feel special, whether it’s for your bias PC,
                    a gift for someone you love, or a little treat for yourself.
                </p>

                <p>
                    We believe handmade items carry warmth that machine-made products
                    cannot. That’s why we focus on quality, comfort, and attention to
                    detail in every creation.
                </p>

                <p className="font-medium text-purple-500">
                    Thank you for supporting handmade work and being part of our journey 🩵
                </p>
            </div>
        </div>
    );
}
