import Script from 'next/script';

export default function ReviewWidget() {
    return (
        <>
            <Script
                src="https://reputationhub.site/reputation/assets/review-widget.js"
                strategy="lazyOnload"
            />
            <div className="w-full py-12 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <iframe
                        className="lc_reviews_widget w-full"
                        src="https://reputationhub.site/reputation/widgets/review_widget/lCpFe5lMYntvl2Pt7Avi"
                        frameBorder="0"
                        scrolling="no"
                        style={{ minWidth: '100%', width: '100%', height: '600px' }}
                    />
                </div>
            </div>
        </>
    );
}
