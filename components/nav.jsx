import Link from "next/link";
import { useRouter } from "next/router";
// import Toggle from './toggle';

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

//    if (route.startsWith('/posts')) {
//     return (
//         <div className="navbar py-6 flex justify-between items-center">
//             <p>Booo</p>
//         </div>
//        );
//    }

   return (
	<div className="navbar py-3 flex justify-between items-center">
		
		<a class="no-underline flex items-center hover:text-950" href="/">
			<span class="mr-2 font-extrabold py-2">Dylan Prehn</span>
		</a>

		<div className="ml-auto">
			{navigation.map((item) => (
				<Link
				key={item.name}
				href={item.href}
				className={classNames(
					"inline-block px-3 py-2 rounded-md lg:hover:bg-gray-200 transition-colors font-normal",
					item.href === "/"
					? router.pathname === item.href
						? "text-gray-950 hover:text-gray-950"
						: "text-gray-500 hover:text-gray-600 no-underline"
					: router.asPath.startsWith(item.href)
					? "text-gray-950 hover:text-gray-950"
					: "text-gray-500 hover:text-gray-600 no-underline"
				)}
				aria-current={router.pathname === item.href ? "page" : undefined}
				>
				{item.name}
				</Link>
			))}
		</div>
	{/* <Toggle /> */}
	</div>
   );
}