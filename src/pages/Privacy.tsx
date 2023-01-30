import { Grid } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";

export const PrivacyPage: FC = () => {
  const privacyRef = useRef(null);
  const termsRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (!location || !location.pathname) return;
    if (location.pathname === "/privacy" && privacyRef.current != null) {
      (privacyRef!.current as any).scrollIntoView();
    } else if (location.pathname === "/terms" && termsRef.current != null) {
      (termsRef!.current as any).scrollIntoView();
    }
  }, [location]);
  return (
    <BaseLayout>
      <Grid container justifyContent={"center"} className="p-10">
        <Grid item md={8} container>
          <p
            className="text-3xl font-sfpro-bold pb-6 text-darkBlue"
            ref={privacyRef}
          >
            Privacy
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Your privacy is important to us. It is Long Sky Media's policy to
            respect your privacy and comply with any applicable law and
            regulation regarding any personal information we may collect about
            you, including via our application, OptiListen, and its associated
            services. Personal information is any information about you which
            can be used to identify you. This includes information about you as
            a person (such as name, address, and date of birth), your devices,
            payment details, and even information about how you use an app or
            online service. In the event our app contains links to third-party
            sites and services, please be aware that those sites and services
            have their own privacy policies. After following a link to any
            third-party content, you should read their posted privacy policy
            information about how they collect and use personal information.
            This Privacy Policy does not apply to any of your activities after
            you leave our app. This policy is effective as of 4 July 2022. Last
            updated: 4 July 2022
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            We Collect No Personal Information
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            We collect no information from you. We collect no information in
            either of these two categories: “voluntarily provided” information
            and “automatically collected” information. “Voluntarily provided”
            information refers to any information you knowingly and actively
            provide us when using our app and its associated services.
            “Automatically collected” information refers to any information
            automatically sent by your device in the course of accessing our app
            and its associated services.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6  text-darkBlue">
            Children’s Privacy
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            We do not aim any of our products or services directly at children
            under the age of 13, and we do not collect personal information
            about children under 13. (We do not collect personal information at
            all.)
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Your Rights and Controlling Your Personal Information
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            The app does not collect your personal information, and thus also
            does not hold, use, or disclose personal information. You do not
            provide personal information to us, and we receive no personal
            information about you from any third party. By law, you may request
            details of the personal information that we hold about you. Because
            we do not hold any personal information about you, in such a case we
            will have no such details to share. Non-discrimination: We will not
            discriminate against you for exercising any of your rights over your
            personal information. We will not deny you goods or services and/or
            charge you different prices or rates for goods or services,
            including through granting discounts or other benefits, or imposing
            penalties, or provide you with a different level or quality of goods
            or services. Notification of data breaches: We will comply with laws
            applicable to us in respect of any data breach. Complaints: If you
            believe that we have breached a relevant data protection law and
            wish to make a complaint, please contact us using the details below
            and provide us with full details of the alleged breach. We will
            promptly investigate your complaint and respond to you, in writing,
            setting out the outcome of our investigation and the steps we will
            take to deal with your complaint. You also have the right to contact
            a regulatory body or data protection authority in relation to your
            complaint. Unsubscribe: We do not gather email address information
            at this time and thus will not store your email in a database or
            send communication, marketing communications or otherwise, to any
            email address. In the event that future versions of this app offer a
            method for receiving email updates, we will provide an unsubscribe
            link at the end of all such email messages.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Business Transfers
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            If we or our assets are acquired, or in the unlikely event that we
            go out of business or enter bankruptcy, any data among the assets
            would not include your personal information. You acknowledge that
            such transfers may occur, and that any parties who acquire us may,
            to the extent permitted by applicable law, continue to use acquired
            data according to this policy, which they will be required to assume
            as it is the basis for any ownership or use rights we have over such
            information.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Limits of Our Policy
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Our app may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            policies of those sites, and cannot accept responsibility or
            liability for their respective privacy practices.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Changes to This Policy
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            At our discretion, we may change our privacy policy to reflect
            updates to our business processes, current acceptable practices, or
            legislative or regulatory changes. If we decide to change this
            privacy policy, we will post the changes here and on our website. If
            required by law, we will get your permission or give you the
            opportunity to opt in to or opt out of, as applicable, any uses of
            your personal information.
          </p>
          <p className="text-3xl font-sfpro-bold pb-6 text-darkBlue">
            Additional Disclosures for General Data Protection Regulation (GDPR)
            Compliance (EU)
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Data Controller / Data Processor
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            The GDPR distinguishes between organizations that process personal
            information for their own purposes (known as “data controllers”) and
            organizations that process personal information on behalf of other
            organizations (known as “data processors”). We, Long Sky Media,
            located at the address provided in our Contact Us section, are a
            Data Controller with respect to any personal information you might
            provide to us, if it were possible to do so.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Legal Bases for Processing Your Personal Information
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            We do not collect or use your personal information at all, but if we
            are ever in the future to collect and use personal information, we
            will do so only when we have a legal right to do so. In which case,
            we will collect and use personal information lawfully, fairly, and
            in a transparent manner. If we are ever to seek your consent to
            process your personal information, and you are at that time under 16
            years of age, we will seek your parent or legal guardian’s consent
            to process your personal information for that specific purpose.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Your Rights and Controlling Your Personal Information
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Restrict: While we do not gather any personal information, it is
            still your right to request that we restrict the processing of your
            personal information if (i) you are concerned about the accuracy of
            your personal information; (ii) you believe your personal
            information has been unlawfully processed. Data portability: You may
            have the right to request a copy of any personal information we hold
            about you. While we do not at this time gather or hold any such
            personal information, if we were to do so in the future, then upon
            request we will provide this information in CSV format or other
            easily readable machine format. You may also have the right to
            request that we transfer any such personal information to a third
            party. Deletion: You may have a right to request that we delete any
            personal information we hold about you at any time, and we will take
            reasonable steps to delete your personal information from our
            current records. If you ask us to delete your personal information,
            we will let you know how the deletion affects your use of our app,
            website or products and services. There may be exceptions to this
            right for specific legal reasons which, if applicable, we will set
            out for you in response to your request. If you terminate or delete
            your account, we will delete your personal information within 90
            days of the deletion of your account. Please be aware that search
            engines and similar third parties may still retain copies of your
            personal information that has been made public at least once, like
            certain profile information and public comments, even after you have
            deleted the information from our services or deactivated your
            account.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Additional Disclosures for California Compliance (US)
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Under California Civil Code Section 1798.83, if you live in
            California and your business relationship with us is mainly for
            personal, family, or household purposes, you may ask us about the
            information we release to other organizations for their marketing
            purposes (which is, at this time, none at all). To make such a
            request, please contact us using the details provided in this
            privacy policy with “Request for California privacy information” in
            the subject line. You may make this type of request once every
            calendar year. We will email you a list of categories of personal
            information we revealed to other organizations for their marketing
            purposes in the last calendar year, along with their names and
            addresses. Not all personal information shared in this way is
            covered by Section 1798.83 of the California Civil Code.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            California Notice of Collection
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            For more information on information we collect, including the
            sources we receive information from, review the “We Collect No
            Personal Information” section.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Right to Know and Delete
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            If you are a California resident, you have rights to delete any
            personal information we collected and know certain information about
            our data practices in the preceding 12 months. In particular, you
            have the right to request the following from us: The categories of
            personal information we have collected about you; The categories of
            sources from which the personal information was collected; The
            categories of personal information about you we disclosed for a
            business purpose or sold; The categories of third parties to whom
            the personal information was disclosed for a business purpose or
            sold; The business or commercial purpose for collecting or selling
            the personal information; and The specific pieces of personal
            information we have collected about you. To exercise any of these
            rights, please contact us using the details provided in this privacy
            policy.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Shine the Light
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            If you are a California resident, in addition to the rights
            discussed above, you have the right to request information from us
            regarding the manner (if at all) in which we share certain personal
            information as defined by California’s “Shine the Light” with third
            parties and affiliates for their own direct marketing purposes. To
            receive this information, send us a request using the contact
            details provided in this privacy policy. Requests must include
            “California Privacy Rights Request” in the first line of the
            description and include your name, street address, city, state, and
            ZIP code.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Contact Us
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            For any questions or concerns regarding your privacy, you may
            contact us using the following details:
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
          OptiListen Support: <a
            className="text-xl font-sfpro-regular pb-6 text-blue-500 underline w-full"
            href="mailto:optilisten@longskymedia.com"
          >
            optilisten@longskymedia.com
          </a></p>

<hr>
          <p
            ref={termsRef}
            className="text-3xl font-sfpro-bold pb-6 text-darkBlue w-full"
          >
            Terms and Conditions
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Agreement between User and Long Sky Media
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Welcome to OptiListen, an application produced and operated by Long
            Sky Media ("Long Sky"). OptiListen is offered to you conditioned on
            your acceptance without modification of the terms, conditions, and
            notices contained herein (the "Terms"). Your use of OptiListen
            constitutes your agreement to all such Terms. Please read these
            terms carefully, and keep a copy of them for your reference. The
            OptiListen mobile application supports becoming a better listener by
            showing the percentage of time spent listening (not speaking) in an
            online audio conversation and comparing it to a goal target.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">Privacy</p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Your use of OptiListen is subject to Long Sky's Privacy Policy.
            Please review our Privacy Policy, which also governs this website
            and informs users of our data collection practices.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Electronic Communications
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Visiting{" "}
            <span className="underline text-blue-500">
              https://www.optilisten.com
            </span>{" "}
            or sending emails to Long Sky constitutes electronic communications.
            You consent to receive electronic communications and you agree that
            all agreements, notices, disclosures and other communications that
            we provide to you electronically, via email and on the Site, satisfy
            any legal requirement that such communications be in writing.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Children Under Thirteen
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Long Sky does not knowingly collect, either online or offline,
            personal information from persons under the age of thirteen. If you
            are under 18, you may use OptiListen only with permission of a
            parent or guardian.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Links to Third Party Sites/Third Party Services
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            OptiListen may contain links to other websites ("Linked Sites"). The
            Linked Sites are not under the control of Long Sky and Long Sky is
            not responsible for the contents of any Linked Site, including
            without limitation any link contained in a Linked Site, or any
            changes or updates to a Linked Site. Long Sky is providing these
            links to you only as a convenience, and the inclusion of any link
            does not imply endorsement by Long Sky of the site or any
            association with its operators.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            No Unlawful or Prohibited Use/Intellectual Property
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            You are granted a non-exclusive, non-transferable, revocable license
            to access and use OptiListen strictly in accordance with these terms
            of use. As a condition of your use of the app, you warrant to Long
            Sky that you will not use OptiListen for any purpose that is
            unlawful or prohibited by these Terms. You may not use the app in
            any manner which could damage, disable, overburden, or impair the
            service or interfere with any other party's use and enjoyment of the
            application. You may not obtain or attempt to obtain any materials
            or information through any means not intentionally made available or
            provided for through the application. All content included as part
            of the service, such as text, graphics, logos, images, as well as
            the compilation thereof, and any software used in the app or in this
            website, is the property of Long Sky or its suppliers and protected
            by copyright and other laws that protect intellectual property and
            proprietary rights. You agree to observe and abide by all copyright
            and other proprietary notices, legends or other restrictions
            contained in any such content and will not make any changes thereto.
            You will not modify, publish, transmit, reverse engineer,
            participate in the transfer or sale, create derivative works, or in
            any way exploit any of the content, in whole or in part, found in
            the app. Long Sky content is not for resale. Your use of the app
            does not entitle you to make any unauthorized use of any protected
            content, and in particular you will not delete or alter any
            proprietary rights or attribution notices in any content. You will
            use protected content solely for your personal use, and will make no
            other use of the content without the express written permission of
            Long Sky and the copyright owner. You agree that you do not acquire
            any ownership rights in any protected content. We do not grant you
            any licenses, express or implied, to the intellectual property of
            Long Sky or our licensors except as expressly authorized by these
            Terms.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            International Users
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            The Service is controlled, operated and administered by Long Sky
            from our offices within the USA. If you access the Service from a
            location outside the USA, you are responsible for compliance with
            all local laws. You agree that you will not use OptiListen in any
            country or in any manner prohibited by any applicable laws,
            restrictions or regulations.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Indemnification
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            You agree to indemnify, defend and hold harmless Long Sky, its
            officers, directors, employees, agents and third parties, for any
            losses, costs, liabilities and expenses (including reasonable
            attorney's fees) relating to or arising out of your use of or
            inability to use the Site or services, any user postings made by
            you, your violation of any terms of this Agreement or your violation
            of any rights of a third party, or your violation of any applicable
            laws, rules or regulations. Long Sky reserves the right, at its own
            cost, to assume the exclusive defense and control of any matter
            otherwise subject to indemnification by you, in which event you will
            fully cooperate with Long Sky in asserting any available defenses.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Arbitration
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            In the event the parties are not able to resolve any dispute between
            them arising out of or concerning these Terms and Conditions, or any
            provisions hereof, whether in contract, tort, or otherwise at law or
            in equity for damages or any other relief, then such dispute shall
            be resolved only by final and binding arbitration pursuant to the
            Federal Arbitration Act, conducted by a single neutral arbitrator
            and administered by the American Arbitration Association, or a
            similar arbitration service selected by the parties, in a location
            mutually agreed upon by the parties. The arbitrator's award shall be
            final, and judgment may be entered upon it in any court having
            jurisdiction. In the event that any legal or equitable action,
            proceeding or arbitration arises out of or concerns these Terms and
            Conditions, the prevailing party shall be entitled to recover its
            costs and reasonable attorney's fees. The parties agree to arbitrate
            all disputes and claims in regards to these Terms and Conditions or
            any disputes arising as a result of these Terms and Conditions,
            whether directly or indirectly, including Tort claims that are a
            result of these Terms and Conditions. The parties agree that the
            Federal Arbitration Act governs the interpretation and enforcement
            of this provision. The entire dispute, including the scope and
            enforceability of this arbitration provision shall be determined by
            the Arbitrator. This arbitration provision shall survive the
            termination of these Terms and Conditions.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Liability Disclaimer
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
            AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL
            ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN.
            LONG SKY MEDIA AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR
            CHANGES IN THE SITE AT ANY TIME. LONG SKY MEDIA AND/OR ITS SUPPLIERS
            MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY,
            AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE,
            PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR
            ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL
            SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
            ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. LONG
            SKY MEDIA AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND
            CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS,
            SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR
            CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            TITLE AND NON-INFRINGEMENT. TO THE MAXIMUM EXTENT PERMITTED BY
            APPLICABLE LAW, IN NO EVENT SHALL LONG SKY MEDIA AND/OR ITS
            SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING,
            WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS,
            ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE
            OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED
            SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR
            ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
            OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF
            THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
            LIABILITY OR OTHERWISE, EVEN IF LONG SKY MEDIA OR ANY OF ITS
            SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE
            SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION
            OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE
            LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY
            PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE
            AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Termination/Access Restriction
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Long Sky reserves the right, in its sole discretion, to terminate
            your access to the app and the related services or any portion
            thereof at any time, without notice. To the maximum extent permitted
            by law, this agreement is governed by the laws of the State of
            California and you hereby consent to the exclusive jurisdiction and
            venue of courts in California in all disputes arising out of or
            relating to the use of the Site. Use of the Site is unauthorized in
            any jurisdiction that does not give effect to all provisions of
            these Terms, including, without limitation, this section. You agree
            that no joint venture, partnership, employment, or agency
            relationship exists between you and Long Sky as a result of this
            agreement or use of the Site. Long Sky's performance of this
            agreement is subject to existing laws and legal process, and nothing
            contained in this agreement is in derogation of Long Sky's right to
            comply with governmental, court and law enforcement requests or
            requirements relating to your use of the Site or information
            provided to or gathered by Long Sky with respect to such use. If any
            part of this agreement is determined to be invalid or unenforceable
            pursuant to applicable law including, but not limited to, the
            warranty disclaimers and liability limitations set forth above, then
            the invalid or unenforceable provision will be deemed superseded by
            a valid, enforceable provision that most closely matches the intent
            of the original provision and the remainder of the agreement shall
            continue in effect. Unless otherwise specified herein, this
            agreement constitutes the entire agreement between the user and Long
            Sky with respect to the Site and it supersedes all prior or
            contemporaneous communications and proposals, whether electronic,
            oral or written, between the user and Long Sky with respect to the
            Site. A printed version of this agreement and of any notice given in
            electronic form shall be admissible in judicial or administrative
            proceedings based upon or relating to this agreement to the same
            extent and subject to the same conditions as other business
            documents and records originally generated and maintained in printed
            form. It is the express wish to the parties that this agreement and
            all related documents be written in English.
          </p>
          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue">
            Changes to Terms
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Long Sky reserves the right, in its sole discretion, to change the
            Terms under which OptiListen is offered. The most current version of
            the Terms will supersede all previous versions. Long Sky encourages
            you to periodically review the Terms to stay informed of our
            updates.
          </p>

          <p className="text-2xl font-sfpro-bold pb-6 text-darkBlue w-full">
            Contact Us
          </p>
          <br />
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Long Sky welcomes your questions or comments regarding the Terms:
          </p>
          <p className="text-xl font-sfpro-regular pb-6 text-midNight">
            Email Address:
          </p>
          <a
            className="text-xl font-sfpro-regular pb-6 text-blue-500 underline w-full"
            href="mailto:optilisten@longskymedia.com"
          >
            optilisten@longskymedia.com
          </a>
          <p className="text-xl font-sfpro-regular pt-6 text-midNight">
            Effective as of November 01, 2022
          </p>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};
