@extends('layouts.main')

@section('title', 'Terms of Service - Muhammad Azizi bin Zaidi')

@section('content')
<section class="legal-page">
    <div class="container">
        <div class="legal-content">
            <h1>Terms of Service</h1>
            <p class="legal-updated">Last Updated: {{ date('F d, Y') }}</p>
            
            <div class="legal-section">
                <h2>1. Introduction</h2>
                <p>Welcome to azizizaidi.dev. These Terms of Service ("Terms") govern your use of our website located at azizizaidi.dev (the "Service") operated by Muhammad Azizi bin Zaidi ("us", "we", or "our").</p>
                <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
            </div>
            
            <div class="legal-section">
                <h2>2. Communications</h2>
                <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing hello@azizizaidi.dev.</p>
            </div>
            
            <div class="legal-section">
                <h2>3. Content</h2>
                <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.</p>
                <p>By posting content to the Service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service. You retain any and all of your rights to any content you submit, post or display on or through the Service and you are responsible for protecting those rights.</p>
            </div>
            
            <div class="legal-section">
                <h2>4. Accounts</h2>
                <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
            </div>
            
            <div class="legal-section">
                <h2>5. Intellectual Property</h2>
                <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Muhammad Azizi bin Zaidi and its licensors. The Service is protected by copyright, trademark, and other laws of both Malaysia and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Muhammad Azizi bin Zaidi.</p>
            </div>
            
            <div class="legal-section">
                <h2>6. Links To Other Websites</h2>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Muhammad Azizi bin Zaidi.</p>
                <p>Muhammad Azizi bin Zaidi has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Muhammad Azizi bin Zaidi shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            </div>
            
            <div class="legal-section">
                <h2>7. Termination</h2>
                <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
            </div>
            
            <div class="legal-section">
                <h2>8. Limitation Of Liability</h2>
                <p>In no event shall Muhammad Azizi bin Zaidi, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
            </div>
            
            <div class="legal-section">
                <h2>9. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of Malaysia, without regard to its conflict of law provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
            </div>
            
            <div class="legal-section">
                <h2>10. Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
            </div>
            
            <div class="legal-section">
                <h2>11. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at hello@azizizaidi.dev.</p>
            </div>

            <div class="legal-back">
                <a href="{{ route('home') }}" class="btn btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Home
                </a>
            </div>
            
        </div>
        
    </div>
    
</section>
@endsection