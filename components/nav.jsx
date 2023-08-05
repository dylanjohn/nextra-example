import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
   { name: "Home", href: "/" },
   { name: "Posts", href: "/posts" },
   { name: "About", href: "/about" },
];

export default function Header(props) {
   const router = useRouter();
   const { route } = props;

   // Check if the current route is a post
   const isPost = router.pathname.startsWith("/posts/");

   const goBack = () => {
     // If the user was on a post, go back to the previous page
     if (isPost) {
       window.history.back();
     } else {
       router.push("/");
     }
   };

   return (
	<div className="navbar mb-8 flex justify-between items-center">
		
		<div className="ml-auto">
			{isPost ? (
				<button
          onClick={goBack}
          className="inline-block px-2 transition-colors font-normal text-gray-500 hover:text-gray-900 no-underline"
        >
          Back
        </button>
			) : (
				navigation.map((item) => (
					<Link
					key={item.name}
					href={item.href}
					className={classNames(
					  "inline-block px-2 transition-colors font-normal",
					  item.href === "/"
						? router.pathname === item.href
						  ? "text-gray-900 hover:text-gray-900"
						  : "text-gray-500 hover:text-gray-900 no-underline"
						: router.asPath.startsWith(item.href)
						? "text-gray-900 hover:text-gray-900"
						: "text-gray-500 hover:text-gray-900 no-underline"
					)}
					aria-current={router.pathname === item.href ? "page" : undefined}
				  >
					{item.name}
				  </Link>
				))
			)}
		</div>
	</div>
   );
}
