# iExec Data Protector Core and Data Protector Sharing Usages

&nbsp;
&nbsp;

_iExex intro here_

_what is data protector core and what it does_

_what is data protector sharing and what it does_

This is a guide to understanding how to use iExecs dataprotector sharing works, how it can be used and some dApps to build with it.

&nbsp;
&nbsp;

## Concept

&nbsp;

The first concept to look at is the data content publishing. For this concept it deals with when you are building a plarform to serve some data to your targeted users. The type of content to be shared can range from courses, tutorials, guides, quizes, books, images, videos, essentially anything that can be stored digitally that you want to share with people and maybe even get paid for it.

The are two forms of applications that can be built with this concept:

1. The first is an application that only serves data or content
2. The second is an application for which users can upload their own data or content as well as interact with the ones you add yourself

With the first application this means that you control the entire application and the type of content that is displayed for users to interact with. For this type of application you would typically need two separate frontend applications, one for the users to interact with the data and another for that is used to upload the data that would be displayed for users (admin panel if you will). The backend is handled by iExec so no need to worry about that, all you do is access the data from iExec and use it. For additional backend services for the desired platform you would need to create the new functionalities. iExec can be utilized for most of subsequent functionalities or you can choose a preferred service to handle them.

To view the different types of applications that can be built with this concept, you can look at the branches for each implementation.

The _open-market_ branch - This branch is for a product catalog application where users can view and interact with the products that are available for purchase. This shows how to protect a data, create collections, add to collections, subscribe to collections, rent or sell collections.

The _open-market-admin_ branch - This branch is for the admin panel of the product catalog application.

&nbsp;

With the second type of application the control is in the hands of users in the sense that users are able to create their own content and share it with others. This type of application is more like a social media platform where users can interact with each other's content. Essentially, users can upload their own data or content onto your platform and make it accessible to other users on the platform. This won't typically need a separate admin panel but if you wish to manage the content that is uploaded by users you can create a separate application for that where you can view all the content that has been uploaded and manage it as well as other aspects like users, content verification, etc.

The _web3-blog_ branch - This branch is for a blog application where users can view and interact with the blog posts that are published. For this application users can also upload their own blog posts and make them accessible to other users on the platform. This is a simple blog application but the concept can be used for something like an article blog app where researchers can upload their research papers and make them accessible to other researchers for a fee if intended, a course platform where teachers can upload their courses and make them accessible to students is also another application in this category and so on.
