"use client";
import { manga } from "@/dataFetching/mangadex";
import { Button, Input, InputGroup, InputLeftElement, InputRightAddon, FormControl } from "@chakra-ui/react";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Box, List, ListItem } from "@chakra-ui/react";

const SearchBar = () => {
	const [text, setText] = useState<string>("");
	const [results, setResults] = useState<any>([]);

	const handleText = (e: React.FormEvent<HTMLInputElement>) => {
		setText(e.currentTarget.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text.trim() === "") return;

		(async () => {
			const mangaResp = await manga.getMangaByTitle(text);
			setResults(mangaResp.data);
		})();
	};

	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<FormControl>
					<InputGroup size="sm">
						<InputLeftElement pointerEvents="none" children={<FcSearch />} />
						<Input placeholder="Manga name" type="search" onChange={handleText} />
						<InputRightAddon p={0} border="none">
							<Button size="sm" type="submit">
								Search
							</Button>
						</InputRightAddon>
					</InputGroup>
				</FormControl>
			</form>
			<List>
				{results.map((manga: any) => (
					<ListItem key={manga.id}>{manga.attributes.title.en}</ListItem>
				))}
			</List>
		</Box>
	);
};

export default SearchBar;
