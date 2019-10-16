---
layout: pages
title: Standardisation
permalink: standardisation
---

The following is a description about how changes to the [Solid Specification](https://github.com/solid/specification) may be proposed and accepted.

Anyone may participate in [this process](https://github.com/solid/culture). Please read the [Code of Conduct](code-of-conduct.md) before doing so.

## Contributors

Any individual that has been involved in proposals to improve the [Solid Specification](https://github.com/solid/specification) has provided a valuable service to the [Solid Project](https://www.solidproject.org) and is encouraged to continue.

All manner of contributions are important - whether identifying problems, asking questions, or proposing normative changes.

There are many topics, problems, or ideas best tackled by a group of people with a specific set of domain expertise. For these cases, we have [Solid Panels](#solid-panels).

### Solid Panels

Solid Panels are groups of individuals focused on a specific problem or domain relevant to Solid, with an aim to propose changes to the [Solid Specification](https://github.com/solid/specification). Anyone may join a panel or suggest a new panel.

Domains may be technical, non-technical, or some combination of the two. For example, a Security Panel could focus on the evaluation and advancement of the Solid security model.

A list of Solid Panels is maintained at [panels.md](panels.md). This listing helps people find panels they may want to participate in, and helps editors find panels to consult as part of the editorial process.

Panels may request to have a repository created within the [Solid Github Organization](https://github.com/solid). These requests should be made by submitting an issue to [solid/process](https://github.com/solid/process). The request should include the proposed name of the repository, and how it will be used. Any editor may reject a proposed name and request an alternative. All panel members will receive [_Maintain Permissions_](https://help.github.com/en/articles/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization) on the panel repository, unless it is subject to editorial review, which would require that it employ a [different permission structure](#repositories). Panel repositories that are inactive for more than six months may be archived by Solid Administrators.

Panels may request to have a gitter channel created within the [Solid Gitter Organization](https://gitter.im/solid). These requests should be made by submitting an issue to [solid/process](https://github.com/solid/process).

## Stakeholders

Stakeholders are those affected by normative changes to the [Solid Specification](https://github.com/solid/specification). There are two types of Stakeholders; [Solid Users](#solid-users) and [Solid Implementers](#solid-implementers). It is important to consider them both when proposing changes, and adhering to the W3C [priority of constituencies](https://www.w3.org/TR/html-design-principles/#priority-of-constituencies) is encouraged. A Stakeholder may be both a user and an implementer.

Stakeholders who have opted to identify themselves publicly are listed at [stakeholders.md](stakeholders.md). Anyone may decide to identify themselves publicly as a Solid Stakeholder, but it is not mandatory. Identified stakeholders may be consulted for feedback as part of the editorial process.

### Solid Users

Solid Users are individuals, companies, or organizations who access data stored in a Solid Pod.

### Implementers
Solid Implementers are companies or organizations who are implementing the [Solid Specification](https://github.com/solid/specification). A Solid Implementer may be any combination of Identity Provider, Pod Provider, and Application Provider.

## How to Make Changes

This section details how changes to the [Solid Specification](https://github.com/solid/specification) may be drafted, proposed, and accepted.

Anyone may submit a proposal to alter this process. These proposals will not be reviewed by the editors. They will be reviewed only by [Tim Berners-Lee](https://github.com/timbl), who is the Solid Director.

### Drafting proposals

Anyone may propose improvements to the [Solid Specification](https://github.com/solid/specification). Here are some examples of different ways to contribute:

- Submit a pull request or issue on the [Solid Specification repository](https://github.com/solid/solid-spec) in GitHub
- Make a suggestion to the Solid Authorization Panel chat room about a change you'd like to see in Web Access Control
- Make a suggestion on the Solid W3C Community Group mailing list to form a new Solid Panel, or join an existing Solid Panel
- Propose an item for the W3C Solid Community Group call

Proposals for substantive changes to the [Solid Specification](https://github.com/solid/specification) go through an editorial review process. A change is considered substantive when it alters the normative text of the Solid Specification or the Solid Roadmap. Any proposal must be realistic and reasonable to implement, preferably with example implementations, and demonstrable support from Implementers.

Any proposal should also be accompanied with a reasonable explanation of the need for the proposed change. For example:

- Adding a new capability that satisfies one or more new use cases, or to reflect a new capability already incorporated consistently into multiple implementations.
- Removing something because it was never adopted by Implementers for legitimate reasons, or because there has been a collective shift in focus away from that feature and it no longer makes sense to keep it.
- Changing something to a simpler design that is able to address the same use case(s) with less complexity, or a change that resolves one or more identified issues in real-world use.

A draft proposal often involves public discussion before being formally presented for review. After these discussions have occurred and a draft proposal has reached a sufficient level of maturity, it should be presented as a candidate proposal, asking Stakeholders and Panels if there are any major objections.

When there are objections, notify the Solid Panels and Stakeholders about the final proposal with an invitation to vote. If there are options, detail them along with the implications of the options. The final proposal needs to be open for one week to give others a chance to vote. To show your support for a proposal write +1. To show your disapproval for a proposal write -1 along with a detailed reason for the disapproval and a suggestion for a preferred alternative. To abstain type 0 when you have no opinion. If you do not vote by the end of the week it will be assumed that you abstain. At the end of the week anyone may publish an overview of the vote results per Solid Panel and Stakeholder.

### Reviewing proposals

Candidate proposals to the [Solid Specification](https://github.com/solid/specification) submitted for review go through an editorial process before they are accepted.
Candidate Proposals to change the Solid Specification must be submitted for editorial review before they are accepted, along with the results of any votes taken.

An Editor determines whether a Candidate Proposal includes a substantive change and marks it accordingly. If there is any disagreement among Editors, the Candidate Proposal will be automatically marked as including a substantive change.

Candidate Proposals with substantive changes require three Editors who are assigned to the material being modified to actively approve the proposal, with no Editors from the Editorial Team actively rejecting. If there are less than three Editors assigned to the material being modified, then other Editors from the Editorial Team may participate.  Editors may abstain. Candidate Proposals with substantive changes must remain open for at least one week before final acceptance. If an Editor does not vote by the end of that week it will be assumed that they abstained, providing a good faith attempt has been made to involve those who may be likely to disagree. Once the Candidate Proposal has successfully passed editorial review and the specified wait-time has elapsed, it may be merged by an assigned Editor.

Candidate Proposals without substantive changes require one Editor assigned to the material being modified to actively approve the proposal, with no Editors from the Editorial Team actively rejecting, and may be merged immediately by an assigned Editor. An assigned Editor may approve and merge their own non-substantive changes. Anyone from the Editorial Team has the right to revert a non-substantive change, but are encouraged to communicate with the assigned Editor that merged it first. Any revert must be accompanied by a reasonable explanation. If the change is reverted because they believe it to be substantive, that must be included in the explanation.

## Editorial Structure

Editor appointments and their respective assignments are made by the Solid Director. The Editorial Team is comprised of all the Editors appointed by the Solid Director, who are listed at [editors.md](editors.md), along with their assignments, contact details, and affiliations. Anyone may apply to be an Editor, and must include one or more requested editorial assignments as part of their application. These requests are not reviewed by other Editors. They are reviewed only by the Solid Director. Editor applications that can demonstrate the support of a relevant panel or group of community members will be favorably considered.

Editors belong to the [Editorial Team](https://github.com/orgs/solid/teams/editors) in the [Solid GitHub Organization](https://github.com/solid).

### Repositories

Repositories requiring editorial review are listed in [editors.md](editors.md#editorial-assignments). Each repository has one or more assigned editors, and only assigned editors are permitted to merge into the master branch of these repositories, per the [proposal review process](#reviewing-proposals).

Editors have [_Admin Permissions_](https://help.github.com/en/articles/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization) on the repositories they are assigned to, and are permitted to grant [_Write Permissions_](https://help.github.com/en/articles/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization) to other contributing authors on the same. All members of the Editorial Team have [_Write Permissions_](https://help.github.com/en/articles/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization) on all repositories requiring editorial review listed in [editors.md](editors.md).

# Who Develops the Solid Standard? 

If you are interested in joining the Solid team email info@solidproject.org with your CV and motivation letter.

# Editors 

## Tim Berners-Lee
**Solid Director and Editor** 
Named one of Time Magazine’s ‘100 Most Important People of the 20th Century,’ Tim invented the web while at CERN in 1989. He is the Founder and Director of the World Wide Web Consortium (W3C), the international standards forum for technical development of the Web, and the Web Foundation whose mission is that the World Wide Web serves Humanity. He co-founded and is President of the Open Data Institute in London. Tim is a Professor at the Massachusetts Institute of Technology (MIT) in the Computer Science and AI Lab ("CSAIL”) where his research group works to re-decentralize the web. In April 2017, Sir Tim was awarded the Turing Prize which is considered the "Nobel Prize of Computing”. Tim is a long time defender of Net Neutrality and the openness of the web.
https://github.com/timbl/
https://www.w3.org/People/Berners-Lee/card#i

## Sarven Capadisli
**Editor** 
Sarven worked on the MIT academic Solid project (expand on details?). He contributes to the advancement of open Web platform specifications and the development of social decentralised applications. He is active as an information architect and scientist in linked research communication. (mention PhD work?) 
https://github.com/csarven
http://csarven.ca/#i

## Ruben Verborgh 
**Editor**
Ruben worked on the MIT academic Solid project (expand on details?). He is now a professor of Semantic Web technology at Ghent University – imec (include some details about the Solid academic work?) 
https://github.com/RubenVerborgh
https://ruben.verborgh.org/profile/#me

## Justin Bingham
**Editor** 
Justin is co-founder of Janeiro Digital who is working on implementing Solid (expand on details of JD and Solid relevant work?)
https://github.com/justinwb
https://justin.inrupt.net/profile/card#me

## Dmitri Zagidulin
**Editor** 
Dmitri worked on the MIT academic Solid project (expand on details?). He now works for (include details?) and is an active member of (include details?) 
https://github.com/dmitrizagidulin 
(include WebID)

## Kjetil Kjernsmo
**Editor** 
Kjetil works for inrupt and focuses on the Solid test suite development. He has a Ph.D. in  Informatics from the University of Oslo in Norway (expand on subject matter?). He has 20 years of experience with social and semantic web technology.
https://github.com/kjetilk
https://solid.kjernsmo.net/profile/card#me

# Panellists

(include the panellists)

# Code of Conduct

Personal threats or discriminatory threats towards arbitrary groups on Solid gitter, Solid forum, or the W3C Solid Community Group call and mailing list may result in a ban of the threatening individual by the Solid Manager.

Repeated and sustained straying from the [defined aims of the Solid gitter channels](https://github.com/solid/information#connect) may result in a ban of those individuals straying from those defined aims by the Solid Manager.

## General Expectations
Below are some general expectations around how participants of the Solid community are encouraged to behave.

Participants in the Solid community are expected to behave professionally and respectfully. This community is committed to maintain a positive and constructive community while helping to build Solid. This commitment calls for a community where participants behave according to the rules of the following Code of Conduct:

- Communicate and behave with respect, professionalism, fairness, and sensitivity.
- Communicate constructively and avoid demeaning or insulting behavior or language.
- Be welcoming. We strive to be a community that welcomes and supports people of all backgrounds and identities. This includes, but is not limited to, members of any race, religion, national origin, sexual orientation, gender identity and expression, and physical and mental abilities.
- Be mindful of people's time and effort spent on contributions to the project. In discussions, read other people's points, make an effort to understand, and reply to relevant statements and questions they write. Substantiate your opinions, concerns, or issues respectfully with arguments of an appropriate technical level to keep the discussion clear and focused.
- Do not insult or put down other participants. Harassment (whether verbal, physical or sexual) and other exclusionary behavior is not acceptable.
- Disagreements, both social and technical, happen all the time. Whenever inappropriate behaviors are observed members of the community should strive to bring the discussion back to a more professional level. In most cases misunderstandings and disagreements can be resolved informally. Do not hesitate to [contact](mailto:manager@solidproject.org) the Solid Manager if you feel that your concerns are not being sufficiently addressed. We hope that most concerns can be solved this way. However, if one person believes another's behavior is inappropriate (inconsistent with the Code of Conduct or the good working of the group), and ordinary communication between them is not possible, escalation of the issue can take place by [contacting](mailto:manager@solidproject.org) the Solid Manager. They may temporarily or permanently ban an individual from participating in activities, e.g. in a chat, mail or in Git for acting against the Code of Conduct.

## Best Practices
Best practices for the Solid Community include:

- Contribute! Help Solid be the best it can be. Work together constructively toward the good working of the technology.
- Stay on topic. Remember others voices need to be heard as well as yours and you must allow the space for other members to participate (e.g. don't monologue or respond to every comment).
- Respect the expertise and contributions of other members of the community (e.g. don't assume that you're "the smartest person in the room"). Remember that this is a community with different backgrounds who have valuable contributions to make.
- Listen first and be sure you understand the point of view of the other person (e.g. don't assume that others are disagreeing with you because they don't understand what you’re saying and don't suggest that another person's comments are invalid because they have a different opinion).
- Respond from an informed and inclusive point of view (e.g. don't respond to comments without reading the background information).
- Do review the work of others to see if you are doing something that other groups have already done (i.e. don't “reinvent the wheel”).
- Know that your contribution is still valuable even if it is not integrated.
- Remember the work is about more than just your area of interest (e.g. don't let your personal or professional goals impede the progress of the group).
- Do [contact](mailto:manager@solidproject.org) the Solid Manager if you feel someone has been working in a way that is having a negative impact on the work of the group, if they are insulting or harassing you, or unfairly impeding your own ability to work.
- Maintain an open mindset and encourage others to do the same. There might be things you or others haven't heard about yet, so be open to send and receive pointers to more info.
- There are multiple ways of achieving the same goals, but when you build something new, check what already exists so we can better understand and help you with your contribution.

## Reporting a Code of Conduct Concern
To report a code of conduct concern you may:
- [Submit an issue](https://github.com/solid/culture/issues/new) to the solid/culture GitHub repository
- Contact the Solid Manager via gitter
- Email [manager@solidproject.org](mailto:manager@solidproject.org)
- Write to the [solid/chat](https://gitter.im/solid/chat) room on gitter with your concern

## Based on:
- https://www.w3.org/Consortium/cepc/  (and an as-of-yet unpublished “Best
  Practices for Working Groups”)
- https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/
- http://geekfeminism.wikia.com/wiki/Code_of_conduct
- https://www.djangoproject.com/conduct/
- http://artofcommunityonline.org/Art_of_Community_Second_Edition.pdf


